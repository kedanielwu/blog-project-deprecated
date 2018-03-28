# blog-server API Document

### `/api/postList`

Query: `none`
Response type: `application/json`
Response format:

~~~json
{
	data: [
		{
			id: '1',
		 	title: 'title1',
		 	content: 'content1',
		 	reply: [
		 		{
		 			id: '1',
		 			name: 'name',
		 			content: 'content'
		 		}
		 	]
		},
		{
			id: '2',
			title: 'title2',
			content: 'content2',
			reply: [
		 		{
		 			id: '1',
		 			name: 'name',
		 			content: 'content'
		 		}
		 	]
		}
	]
}
~~~