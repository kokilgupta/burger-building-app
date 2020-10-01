import React,{Component} from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import styles from '../Modal/Modal.module.css';
import BackDrop from "../Backdrop/Backdrop";
class Modal extends Component {
    shouldComponentUpdate(nextProps,nextState){
        return nextProps.show!==this.props.show||nextProps.children!==this.props.children;

    }
    componentWillUpdate(){
       console.log('[ModalUpdate]');
}
    render() {
        return (
            <Auxiliary>
                <BackDrop show={this.props.show}
                          click={this.props.modalClose}/>
                <div className={styles.Modal}
                     style={{
                         transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                         opacity: this.props.show ? '1' : '0'
                     }}>
                    {this.props.children}
                </div>
            </Auxiliary>
        )
    }
}
export default Modal;