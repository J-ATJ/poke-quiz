import { Answer } from './Answer';
import { Picture } from './Picture';
export function Answers(props){
  const myList = [props.op1,props.op2,props.op3,props.op4];
  const number = myList[Math.floor(Math.random() * myList.length)];
    return(
        <div className="answer-container" >
          <div className="image-ctn">
            <Picture img={number[0]} />
          </div>
          <div className="components-ctn">
            <Answer name={props.op1[1]} number={number[1]} />
            <Answer name={props.op2[1]} number={number[1]} />
            <Answer name={props.op3[1]} number={number[1]} />
            <Answer name={props.op4[1]} number={number[1]} />
          </div>
        </div>
    );
};