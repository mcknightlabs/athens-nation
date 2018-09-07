class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { key: 1 };
    }
    handleSelect(key, formCategory) {
        this.props.toggleForm(formCategory);
        this.setState({ key });
    }
    render(){
        return (
            <Nav bsStyle="tabs" activeKey={this.state.key}>
            <NavItem eventKey={1} title="Form1" onClick={() => this.handleSelect(1, 'form1')}>Form1</NavItem>
            <NavItem eventKey={2} title="Form2" onClick={() => this.handleSelect(2, 'form2')}>Form2</NavItem>
            <NavItem eventKey={3} title="Form3" onClick={() => this.handleSelect(3, 'form3')}>Form3</NavItem>
            <NavItem eventKey={4} title="Form4" onClick={() => this.handleSelect(4, 'form4')}>Form4</NavItem>
            </Nav>
        );
    }
}