import '../components-css/Picture.css';
export function Picture(props){
    return(
        <div className="picture" id='picture'>
            <img src={props.img} alt="image" className='image' />
        </div>
    );
};