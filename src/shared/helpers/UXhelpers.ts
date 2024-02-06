export const onKeyPress = (event: React.KeyboardEvent<HTMLInputElement>, callback: () => void): void => {
    if (event.key === 'Enter') {
        callback();
    }
};