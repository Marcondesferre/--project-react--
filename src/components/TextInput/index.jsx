import './styles.css'
export const TextInput = ({ searchValue, handleChange }) => {
    return (
        <input
        className="test-input" 
        onChange={handleChange}
        value={searchValue}
        type="search"
        placeholder="Type your search" />
    )
}