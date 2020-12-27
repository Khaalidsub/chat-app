import PropTypes from 'prop-types'

function SearchField(props: any) {
    return (

        <form className="w-full pt-2 bg-blue-100">
            <input className="block mx-auto w-2/3  m-2 rounded-full pl-7 pr-12 px-3 py-3 place-items-end border border-gray-50  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="chat name" />

        </form>

    )
}

SearchField.propTypes = {

}

export default SearchField

