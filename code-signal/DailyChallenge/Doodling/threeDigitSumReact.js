class App extends React.Component {
    constructor(props) {
    super(props);
    this.state = { num1: 0, num2: 0, num3: 0,  showThree: false };
  }
  
  handleChange(event) {
  this.setState({num1: event.target.value})
  this.calcSum()
}
  
  handleChange2(event) {
  this.setState({num2: event.target.value})
  this.calcSum()
}
  
  handleChange3(event) {
  this.setState({num3: event.target.value})
  this.calcSum()
}
  
  calcSum = () => {
   let sum = parseInt(this.state.num1) + parseInt(this.state.num2) + parseInt(this.state.num3);
    return sum;
  } 
  
  showThird = (e) => {
    e.preventDefault();
    this.setState(state => ({
      showThree: !state.showThree
    }));
  }

  
  render() {
    
    let total = this.calcSum()
    let visible = this.state.showThree
    
    return (
      
      <form>
        <div id="data-entry">
       <input
          id="num1"
          type="integer"
          name="num1"
          placeholder="Enter Number 1"
         onChange={this.handleChange.bind(this)}
        />
     </div>
     <div id="data-entry">
       <input
          id="num2"
          type="integer"
          name="num2"
          placeholder="Enter Number 2"
         onChange={this.handleChange2.bind(this)}
        />
       </div>
          {visible ? 
            <input
          id="num3"
          type="integer"
          name="num3"
          placeholder="Enter Number 3"
         onChange={this.handleChange3.bind(this)}
        /> : <p></p>
          }
      <div>
        <h6>Sum: {total}</h6>
      </div>
        <button onClick={this.showThird}>Show Third Entry </button>
   </form>

   )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

