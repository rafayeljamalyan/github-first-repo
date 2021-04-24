function Test () {
    const myFriends = [
        "Ero",
        "Yero"
    ];
    
    return ( 
        <>
            <div>My name is Rafayel</div>
            <div>
                <h3>My friends</h3>
                {
                    myFriends.map( (el,i) => (
                        <p key={i}>{el}</p> 
                    ))
                }
            </div>
        </>
    );
}

export default Test;
