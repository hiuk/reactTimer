import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators as timerActions } from "../../reducer";
import Timer from "./presenter";

function mapStateToProps(state){
    const {isPlaying, elapsedTime, timeDuration} = state;

    return {
        isPlaying,
        elapsedTime,
        timeDuration
    };
}

function mapDispatchToProps(dispatch){
    return {
        startTimer:bindActionCreators(timerActions.startTimer, dispatch),
        restartTimer:bindActionCreators(timerActions.restartTimer, dispatch),
        addSecond:bindActionCreators(timerActions.addSecond, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);