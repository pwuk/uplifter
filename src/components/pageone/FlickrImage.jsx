import React from "react";
import dompurify from "dompurify";

const FlickrImage = ({
  title,
  link,
  media,
  description,
  author,
  author_id,
  tags,
  date_taken,
  published
}) => {
  const sanitiser = dompurify.sanitize;
  return (
    <div className="flickr-image">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img alt="flicker" src={media.m} />
      </a>
      <div>
        {title} by {author}
      </div>
      <div dangerouslySetInnerHTML={{ __html: sanitiser(description) }} />
      {tags !== "" && (
        <p>
          <label>Tags: </label>
          <select>
            {tags.split(" ").map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        </p>
      )}
    </div>
  );
};

export default FlickrImage;
