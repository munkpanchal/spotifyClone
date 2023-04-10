export const IconButton = ({ children, onClick }) => {
    return (
        <div className="icon-button" onClick={onClick}>
            {children}
        </div>
    );
};
export const IconButtonDark = ({ children, className, onClick }) => {
    return (
        <div className={`icon-button dark ${className} `} onClick={onClick}>
            {children}
        </div>
    );
};
export const IconButtonWhite = ({ children, onClick }) => {
    return (
        <div className="icon-button white" onClick={onClick}>
            {children}
        </div>
    );
};
