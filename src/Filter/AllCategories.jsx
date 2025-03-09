import Filter from "./Filter";

const AllCategories = () => {
    return(<div className="categories">
        {['decorative', 'care', 'perfume', 'all'].
        map((category, index) => <Filter category={category} key={index} />)}
    </div>)
}

export default AllCategories;