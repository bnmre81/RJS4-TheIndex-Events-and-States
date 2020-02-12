import React from "react";
import authors from "./data";

const AuthorDetail = props => {
  const author = props.author;

  const bookList = author.books.map(book => (
    <tr>
      <td>{author.books[2].title}</td>
      <td>{book.title}</td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  ));

  return (
    <div className="author col-xs-10">
      <div>
        <h3>
          {author.first_name} {author.last_name}
        </h3>
        <img
          src={author.imageUrl}
          className="img-thumbnail"
          alt={`${author.first_name} ${author.last_name}`}
        />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>
              {author.first_name} {author.last_name}
            </th>
            <th>Authors</th>
            <th>{author.color}</th>
          </tr>
        </thead>
        <tbody>{bookList}</tbody>
      </table>
    </div>
  );
};

export default AuthorDetail;
