import { XMarkIcon, MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/solid";

const Search = ({search, setSearch}) => {
    return (
        <div className={(search ? 'translate-y-0' : '-translate-y-full') + ' w-full h-full transform transition fixed top-0 left-0 bg-white z-10 px-4 py-8'}>
            <div className="flex items-center justify-between max-w-4xl mx-auto">
                <h3 className="font-bold text-sm">Edit your search</h3>
                <button onClick={() => setSearch(false)}>
                    <XMarkIcon className="h-6 w-6 text-gray-700" />
                </button>
            </div>
            <div className="max-w-sm mx-auto sm:max-w-4xl">
                <div className="mt-10 sm:flex">
                    <fieldset className="relative w-full sm:w-2/5">
                        <label className="absolute top-4 left-4 uppercase font-bold text-xs" htmlFor="location-search">Location</label>
                        <input
                        className="w-full px-4 pt-10 pb-4 rounded-t-xl border-gray-200 border-2 text-sm sm:rounded-l-xl sm:rounded-r-none"
                            id="location-search"
                            type="text"
                            placeholder="Where?"
                        />
                    </fieldset>
                    <fieldset className="relative w-full sm:w-2/5">
                        <label className="absolute top-4 left-4 uppercase font-bold text-xs" htmlFor="guest-search">Guests</label>
                        <input
                            className="w-full px-4 pt-10 pb-4 rounded-b-xl border-gray-200 border-2 border-t-0 text-sm sm:rounded-none sm:border-t-2 sm:border-l-0"
                            id="guest-search"
                            type="text"
                            placeholder="Add guests"
                        />
                    </fieldset>
                    <button className="flex items-center justify-center bg-windbnb text-white px-6 py-4 rounded-2xl hover:bg-windbnb-dark transition absolute bottom-8 left-1/2 transform -translate-x-1/2 sm:static sm:w-1/5 sm:translate-x-0 sm:rounded-l-none">
                        <MagnifyingGlassIcon className="h-5 w-5 text-white mr-2" />
                        Search
                    </button>
                </div>
                <ul className="flex flex-wrap space-y-8 py-8">
                    <li className="flex items-center w-full">
                        <MapPinIcon className="h-5 w-5 text-gray-700 mr-2" />
                        <span className="leading-none">Helsinki, Finland</span>
                    </li>
                    <li className="flex items-center w-full">
                        <MapPinIcon className="h-5 w-5 text-gray-700 mr-2" />
                        <span className="leading-none">Helsinki, Finland</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Search;