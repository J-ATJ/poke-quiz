import '../components-css/Answer.css';
export function Answer(props){
    function delay(){
        window.location.reload();
    };
    const body = document.querySelector("body");
    return(
        <div className="answer" onClick={()=>{ 
                if(props.name === props.number){
                    body.style.backgroundColor = "#00942e";
                } else{
                    body.style.backgroundColor = "darkred";
                };
                setTimeout(delay, 2000);
            }} >
            {!props.name ? "----":props.name.charAt(0).toUpperCase()+ props.name.slice(1)}
        </div>
    );
};