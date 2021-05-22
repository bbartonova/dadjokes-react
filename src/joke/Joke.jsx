import React, {useState} from 'react';
import '../joke/style.css';

export const Joke = ( {props} ) => {
    const [likeCount, setLikeCount] = useState(props.likes);
    const [dislikeCount, setDislikeCount] = useState(props.dislikes);

    return (
        <>
            <div className="joke">
                <div className="joke__body">
                    <div className="joke__user">
                        <img
                            className="user-avatar"
                            src={props.avatar}
                        />
                        <p className="user-name">{props.name}</p>
                    </div>
                    <p className="joke__text">
                        {props.text}
                    </p>
                </div>
                <div className="joke__likes">
                    <button
                        id="btn-up"
                        className="btn-like btn-like--up"
                        onClick={() => {
                            setLikeCount(likeCount + 1);
                        }}
                    ></button>
                    <span id="likes-up" className="likes-count likes-count--up">
                {likeCount}
              </span>
                    <button
                        id="btn-down"
                        className="btn-like btn-like--down"
                        onClick={() => {
                            setDislikeCount(dislikeCount + 1);
                        }}
                    ></button>
                    <span id="likes-down" className="likes-count likes-count--down">
                {dislikeCount}
              </span>
                </div>
            </div>
        </>
    );
};
