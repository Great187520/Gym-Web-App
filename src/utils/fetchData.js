export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        //'X-RapidAPI-Key': '62e3c65b68mshdb3378d32bfe5a2p19e631jsn6e7f7de52363',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
    }
      
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '',
    },
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}