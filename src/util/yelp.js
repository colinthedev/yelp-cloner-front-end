const { default: SearchBar } = require("../components/SearchBar/SearchBar");

const apiKey = 'oesfcRVaRRxQLXCGdccyU0kuE8olCUF_VL5SlNNxK6TaMarwOBfy8qn9fMthz0G5ipy3zHN4I6h6X0f-m3FwVq51EJU0pNspK66m0iYKhE-xxTm9KHHu_7QB1yVeYXYx';

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            },
        }).then((response) => {
            return response.json()
        }).then((jsonResponse) => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                })
            }
        })
    }
}

export default Yelp
