import '../App.css';

function Header(props) {
    return (
        <div className='flex shopping-card'>
            <div onClick={() => props.handleShow(false)} >Shopping Cart App</div>
            <div onClick={() => props.handleShow(true)}> Checkout :
                <span> {props.count} </span>Tickets
            </div>
        </div>
    );
}

export default Header;