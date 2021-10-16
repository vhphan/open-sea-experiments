# %%
import requests

# %%
params = {
    'collection': 'the-wanderers',
    'limit': 5
}

r = requests.get('https://api.opensea.io/api/v1/assets', params=params)
assets_info = r.json()