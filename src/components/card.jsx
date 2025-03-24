function Card( {children} ) {

    const cardStyle = {
        backgroundColor: 'purple',
        border: '1px solid white',
        height: '300px'
    }
     
    return(
        <div style={cardStyle}>{children}</div>
    )
}

export default Card