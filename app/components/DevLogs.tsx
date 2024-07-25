import sortIcon from "/sorting_icon.svg";
import tagIcon from "/tag_icon.svg";
import heartIcon from "/heart_icon.svg";
import commentIcon from "/comment_icon.svg";
import documentIcon from "/document_icon.svg";
import cardsData from "../devLogsData.json";
const updates = cardsData.updates;

interface Card {
  id: number;
  image: string;
  title: string;
  author: string;
  comments: number | string;
  hearts: number | string;
  body: string;
  majorUpdate?: boolean;
  files?: number;
}

const cards: Card[] = updates as Card[];

export default function DevLogs() {
  return (
    <div className="w-3/4 bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4 text-darkWhite">Dev Logs</h2>
      <div className="mb-4 flex cursor-pointer">
        <img src={sortIcon} alt="Sort Icon" />
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:text-gold">
          Popular
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:text-gold">
          New & Popular
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:text-gold">
          Most Recent
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {cards.map((card) => (
          <div key={card.id} className="text-white rounded">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-52 object-cover"
            />
            <h3 className="mt-2 text-lg font-bold">{card.title}</h3>
            <p className="text-sm text-gray-600">{card.author}</p>
            {card.majorUpdate && (
              <div className="bg-darkGold text-xs px-2 py-1 w-40 h-8 mt-2 inline-flex items-center justify-center">
                <img src={tagIcon} alt="Tag" className="h-4 w-4 mr-1" />
                Major Update
              </div>
            )}
            <div className="flex items-center mt-2">
              <span className="text-sm mr-1">{card.comments}</span>
              <img src={commentIcon} alt="Comment Icon" />
              <span className="text-sm ml-4 mr-1">{card.hearts}</span>
              <img src={heartIcon} alt="Heart Icon" />
            </div>
            <p className="mt-2 text-sm text-gray-700">{card.body}</p>
            {card.files && (
              <div className="mt-2 text-xs text-gray-500 flex items-center">
                <img src={documentIcon} alt="File Icon" className="mr-1" />
                {card.files} files
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
