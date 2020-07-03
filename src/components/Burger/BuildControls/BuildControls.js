import  React from 'react';
import styles from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls=[
      {label:'Salad', type:'salad'},
      {label:'Bacon', type:'bacon'},
      {label:'Cheese', type:'cheese'},
      {label:'Meat', type:'meat'}
];
const BuildControls=(props)=>(
      <div className={styles.BuildControls}>
            <p>Total Price:<strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl=>(
                <BuildControl
                   added={()=>props.ingredientAdded(ctrl.type)}
                   removed={()=>props.ingredientRemoved(ctrl.type)}
                   key={ctrl.label}
                   label={ctrl.label}
                disable={props.disable[ctrl.type]}/>
            ))}
            <button className={styles.OrderButton}
            disabled={!props.purchase}
            onClick={props.clicked}>ORDER NOW</button>
      </div>
);


export default BuildControls;