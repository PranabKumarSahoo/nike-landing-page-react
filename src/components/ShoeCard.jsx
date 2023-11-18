const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {

    const handleClick = () => {
        if (bigShoeImg !== imgURL.bigShoe) {
            changeBigShoeImage(imgURL.bigShoe);
        }
    }

    return (
        <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick}>
            <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 rounded-xl max-sm:p-4">
                <img
                    src={imgURL.thumbnail}
                    alt="Shoe Collection"
                    width={150}
                    height={100}
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default ShoeCard;