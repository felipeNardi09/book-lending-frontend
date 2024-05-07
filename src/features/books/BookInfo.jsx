/* eslint-disable react/prop-types */
import { formatYear } from "../../utils/helpers";

export default function BookInfo({
  id,
  title,
  author,
  numberOfPages,
  language,
  genre,
  synopsis,
  publisher,
  publicationDate,
}) {
  return (
    <div className="grid grid-cols-[2fr_3fr] grid-rows-[1fr_4fr] gap-2">
      <div className="col-start-1 col-end-3 flex items-center justify-center">
        <h2 className="text-xl underline">{title}</h2>
      </div>
      <div className=" bg-blue-200">Imagem</div>
      <div className="flex flex-col gap-1 text-left">
        <p>
          Author: <span>{author}</span>
        </p>
        <p>
          Number of pages: <span>{numberOfPages}</span>
        </p>
        <p>
          Language: <span>{language}</span>
        </p>
        <p>
          Genre: <span>{genre}</span>
        </p>
        <p>
          Synopsis: <span>{synopsis}</span>
        </p>
        <p>
          Publisher: <span>{publisher}</span>
        </p>
        <p>
          Year of publication: <span>{formatYear(publicationDate)}</span>
        </p>
      </div>
    </div>
  );
}
