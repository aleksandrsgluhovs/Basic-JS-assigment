export const weatherInput = document.querySelector('.main__input');
export const weatherBtn = document.querySelector('.main__btn');
export const weatherCity = document.querySelector('.main__city');

weatherInput.addEventListener('input', (event) => {
    weatherBtn.disabled = event.currentTarget.value === '';
});

export const api_key = '0bb7042a31774c6480042af2fce6fa3a';
export const latitude = '51.0';
export const longitude = '7.0';

export const api_url = 'https://api.opencagedata.com/geocode/v1/json'

export async function runOpenCageApi(location) {
    return await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${api_key}&language=en&pretty=1&no_annotations=1`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                alert('Request failed');
                return {
                    results: [{
                            formatted: 'Salihorsk, Salihorsk District, Belarus',
                            geometry: {
                                lat: 52.7893039,
                                lng: 27.5318168
                            }
                        }]
                }
            }
        })
        .then((data) => {
            return data;
        });
}

weatherBtn.addEventListener('click', async () => {
    const locationInfo = await runOpenCageApi(weatherInput.value);
    const { formatted: locationName, geometry: coordinates } = locationInfo.results[0];

    localStorage.setItem('locationInfo', JSON.stringify(locationInfo));

    weatherInput.value = '';
    weatherCity.textContent = locationName;

    location.textContent = locationName;
})
