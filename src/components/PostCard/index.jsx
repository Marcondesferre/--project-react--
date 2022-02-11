import "./styles.css"
export const PostCard = ({title, cover, body}) => {
    //const post = props.post;
    //const { post } = props;
    return (
        <div className="post">
            <img src={cover} alt={title} />
            <div className="post-content">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </div>
    )
}