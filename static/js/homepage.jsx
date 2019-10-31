class Homepage extends React.Component {
	render(){
		return (
        <div>
            <p>This is a great site for viewing trading cards.</p>
            <a href="/cards">View the trading cards.</a>
            <img src="/static/img/balloonicorn.jpg" />
        </div>
        );
    }
}

ReactDOM.render(<Homepage />, document.getElementById('app'));