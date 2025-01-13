function getFullYear() {
    return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
  if (!isIndex) return "Holberton School main dashboard";
  return "Holberton School";
}

// export
export { getFullYear, getFooterCopy };

// getLatestNotification It accepts one argument isIndex(boolean). 
export const getLatestNotification = () => 
  '<strong>Urgent requirement</strong> - complete by EOD';