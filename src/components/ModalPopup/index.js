import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';

class ModalPopup extends React.Component {
  render() {
    const { closeFunc, maxWidth } = this.props;
    return (
      <Dialog
        TransitionComponent={Slide}
        open={true}
        onClose={closeFunc}
        maxWidth={maxWidth}
        fullWidth={true}
      >
        <DialogContent className="dialogue-grid">
          {this.props.children}
        </DialogContent>
      </Dialog>
    )
  }
}

export default ModalPopup;