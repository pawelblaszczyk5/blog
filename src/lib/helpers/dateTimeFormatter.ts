const dateFormatter = new Intl.DateTimeFormat('en-GB', {
	year: 'numeric',
	month: 'numeric',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric',
	second: 'numeric'
});

export const formatDate = (date: string): string => {
	return dateFormatter.format(new Date(date));
};
