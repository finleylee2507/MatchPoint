event json structure:
{event_id}: {
	"name": "ajoaisjasf",
	"activity": "",
	"privacy": 0, // 0 = public, 1 = invite only
	"datetime": {}, // datetime object?
	"location": "",
	"desc": "",
	"maxCapacity": 69,
	"currentCapacity": 1,
	"owner": {}, // user object
	"users": [ // list of user objects
		{},
		{},
		{}
	],
	"timestamp": {},
	"imgSrc": ""
}

user json stucture:
{google_account_id}: {
	"displayName": "",
	"bio": "",
	"teams": [],
	"dateJoined": {},
}