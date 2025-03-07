import Filter from "./Filter";

const AllCategories = () => {
    return(<div className="categories">
        {['decorative', 'care', 'perfume', 'all'].
        map(category => <Filter category={category} />)}
    </div>)
}

export default AllCategories;