const apiKey = "API_KEY_SHOULD_NOT_BE_REVEALED";
// also because yelp isnt letting me sign up :(
const url = "https://api.yelp.com/v3/businesses/search?";

const Yelp = {
  search(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/${url}term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: { Authorization: `Bearer ${apiKey}` }
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.imageSrc,
              name: business.name,
              address: business.address,
              city: business.city,
              state: business.state,
              zipCode: business.zipCode,
              category: business.category,
              rating: business.rating,
              reviewCount: business.reviewCount
            };
          });
        }
      });
  }
};

export default Yelp;
