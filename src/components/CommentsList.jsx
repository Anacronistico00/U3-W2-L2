import SingleComment from './SingleComment';

const CommentsList = (props) => {
  const updateComments = props.updateComments;
  return (
    <>
      {props.comments.map((singleComment) => {
        return (
          <li key={singleComment._id}>
            <SingleComment
              comment={singleComment.comment}
              id={singleComment._id}
              updateComments={updateComments}
            />
          </li>
        );
      })}
    </>
  );
};

export default CommentsList;
