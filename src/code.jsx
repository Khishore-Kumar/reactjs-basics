var Product = React.createClass({
    getInitialState: function(){
        return {qty:0};
    },
    show:function(){
        {this.props.handleShow(this.props.name)};
    },
    buy: function() {
        this.setState({qty:this.state.qty+1});
        this.props.handleTotal(this.props.price);
    },
    render: function(){
        return(
            <div>
                <p>{this.props.name} - ${this.props.price}</p>
                <button onClick={this.buy}>Add</button>
                <button onClick={this.show}>Show</button>
                <h3>Qty: {this.state.qty} item(s)</h3>
                <hr/>
            </div>
        );
    }
});


var Total = React.createClass({
    render:function(){
        return(
            <h3>Total Cash: ${this.props.total}</h3>
        );
    }
});

var ProductForm = React.createClass({
    submit:function(e){
        e.preventDefault();
        var product = {
            name:this.refs.name.value,
            price:parseInt(this.refs.price.value)
        }
        this.props.handleCreate(product);
        this.refs.name.value="";
        this.refs.price.value="";
    },
    render:function(){
        return(
            <div>
            <form onSubmit={this.submit}>
            <input type="textbox" placeholder="Product Name" ref="name"/> - $
            <input type="textbox" placeholder="Product Price" ref="price"/>
            <br/>
            <br/>
            <button>Create Product</button>
            </form>
            <hr/>
            </div>
        );
    }
});

var ProductList = React.createClass({
    getInitialState:function(){
        return{total:0,
        productList:[
            {name:"Android", price:199},
            {name:"iPhone", price:399},
            {name:"Windows", price:159}
        ]
        };
    },
    createProduct:function(product){
        this.setState({productList: this.state.productList.concat(product)});
    },
    totalPrice:function(price){
        this.setState({total: this.state.total+price});      
    },
    showSelection:function(name){
        alert("You have selected "+name);
    },
    render:function(){
        var component=this;
        var products = this.state.productList.map(function(product) {
            return(
                <Product name={product.name} price={product.price} 
                handleShow={component.showSelection}
                handleTotal={component.totalPrice}/>
            );
        });


        return(
            <div>
            <ProductForm handleCreate={this.createProduct}/>
            {products}
            <Total total={this.state.total}/>
            </div>
        );
    }
});

React.render(<ProductList/>,document.getElementById("root"));