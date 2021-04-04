function Div() {
    return <div></div>
}

@noop
export default class Decorator extends React.Component {
    render() {
        return <Div/>
    }
}

function noop() {}