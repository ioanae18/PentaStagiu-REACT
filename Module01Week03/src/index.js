import React from 'react' 
import ReactDOM from 'react-dom'

function tick()
{
    const date = new Date().toLocaleString();

    const dateElement = React.createElement('div', null, `Current date ${date}`, );

    const component = (
        <div>
           <div> Continut static </div>
           {dateElement}
        </div>
    );
    
    ReactDOM.render(component, document.getElementById("root"));
}

setInterval(tick, 1000);

function tick1()
{
    function Name()
    {
        return (
            <div>
                <Welcome name = "Emilia"/>
                <Welcome name = "Ioana"/>
                <Welcome name = "Ivan"/>
            </div>
        );
    }

    function Welcome(props)
    {
        return <h2>Hello, {props.name} </h2>;
    }

    ReactDOM.render(<Name/>, document.getElementById("root1"));
}

setInterval(tick1);

function tick2()
{
    function Produs()
    {
        const x = 5;
        const y = 10;
        return (
            <div>
                <Result res = {Product(x, y)} />
            </div>
        )
    }

    function Product(x, y) 
    {
         return x * y;
    }

    function Result(props)
    {
        return <h2>The result is, {props.res} </h2>;
    }

    ReactDOM.render(<Produs/>, document.getElementById("root2"));
}

setInterval(tick2);