type CardProps = {
  title: string;
  description: string;
  image: string;
  date: string;
  month: string;
};

const NewsCard: React.FC<CardProps> = ({ title, description, image, date, month }) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden h-110">
      <img src={image} alt={title} className="h-40 w-full object-cover" />
      <div className="p-4 flex gap-5 w-full mt-2">
        <div
        className="bg-primary w-1/3 h-20 flex flex-col rounded-2xl justify-center items-center ">
            <p className="text-3xl text-secondary border-b-2 border-b-white/20 rounded-md">{date}</p>
            <p className="text-base text-secondary">{month}</p>
        </div>
        <h2 className="font-bold text-lg mb-1 w-2/3">{title}</h2>
      </div>

       <p className="text-sm text-gray-600 p-4 text-left">{description}</p>
    </div>
  );
};

export default NewsCard;
