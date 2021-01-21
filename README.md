# Blog API

## Routes

|                    | Route                         | Method   | Description                      |
| ------------------ | ----------------------------- | -------- | -------------------------------- |
| :heavy_check_mark: | /api/login                    | `POST`   | Login                            |
| :heavy_check_mark: | /api/register                 | `POST`   | Register                         |
| :x:                | /api/subscribe                | `POST`   | Subscribe                        |
| :x:                |
| :x:                | /api/posts                    | `GET`    | List all posts                   |
| :x:                | /api/posts/:slug              | `GET`    | Get a post                       |
| :x:                | /api/posts/                   | `POST`   | Create a new post                |
| :x:                | /api/posts/:slug              | `PUT`    | Update a post with new info.     |
| :x:                | /api/posts/:slug              | `DELETE` | Delete a post                    |
| :x:                |
| :x:                | /api/posts/:slug/comments     | `GET`    | List all comments                |
| :x:                | /api/posts/:slug/comments/:id | `GET`    | Get a comment                    |
| :x:                | /api/posts/:slug/comments/    | `POST`   | Create a new comment             |
| :x:                | /api/posts/:slug/comments/:id | `PUT`    | Update a comment with new info.  |
| :x:                | /api/posts/:slug/comments/:id | `DELETE` | Delete a comment                 |
| :x:                |
| :heavy_check_mark: | /api/authors                  | `GET`    | List all authors                 |
| :heavy_check_mark: | /api/authors/:slug            | `GET`    | Get a author                     |
| :x:                | /api/authors/:slug/posts      | `GET`    | Bring the author's posts         |
| :x:                | /api/authors/:slug            | `PUT`    | Update a author with new info.   |
| :x:                | /api/authors/:slug            | `DELETE` | Delete a author                  |
| :x:                |                               |
| :x:                | /api/pages                    | `GET`    | List all pages                   |
| :x:                | /api/pages/:slug              | `GET`    | Get a page                       |
| :x:                | /api/pages/                   | `POST`   | Create a new page                |
| :x:                | /api/pages/:slug              | `PUT`    | Update a page with new info.     |
| :x:                | /api/pages/:slug              | `DELETE` | Delete a page                    |
| :x:                |
| :x:                | /api/categories               | `GET`    | List all categories              |
| :x:                | /api/categories/:slug         | `GET`    | Get a category                   |
| :x:                | /api/categories/              | `POST`   | Create a new category            |
| :x:                | /api/categories/:slug         | `PUT`    | Update a category with new info. |
| :x:                | /api/categories/:slug         | `DELETE` | Delete a category                |
