
const CustomCard = ({ photo,id, about }) => {

    return (
        <>
            <article className="flex flex-col items-center gap-6 p-7 rounded-2xl shadow-xl bg-white dark:bg-gray-900 max-w-sm">
                <figure>
                    <img className="size-48 shadow-md rounded-md" alt="" src={photo} />
                </figure>
                <section className="flex flex-col items-center gap-2 text-center">
                    <h2 className="text-2xl font-semibold">Cats</h2>
                    <h3 className="font-medium text-sky-500">The Anti-Patterns</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm italic">
                        {about}
                    </p>
                    <p className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                        <time dateTime="2025">2025</time>
                        <span>·</span>
                        <span>No.: {id}</span>
                    </p>
                </section>
            </article>


        </>
    );
};
export default CustomCard;
