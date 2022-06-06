
const ActionBar = (props) => {
    
    return (
      <div className="action-buttons">
        <button onClick={props.decrementItem}>Remove</button>
        <button onClick={props.incrementItem}>Add to my cart</button>
      </div>
    );
  }

export default ActionBar