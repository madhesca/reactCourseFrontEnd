//component add About.js, Terms.js
//about, github html temp, about.html, ccopy after header, beofre footer
//github, terms, bettwen haeder footer copy paste
//Main,  add about and terms,
//install react-router-dom, import BrowserRouter, Switch Route in Main
//swap <> with Browouter, add switch in beetween header and footer
//add Route to home, /about, /terms
//add Link to the footer
//save and test
//in wepack, after got true
//historyApiFallback: {index: 'index.html'}
//save and test

//header, adjust complex app to send us to home
done;
//add react developer tools extention
done;

//in about copy div container,delete and change to Container
//in Container, paste the div
//import the childern thru props, do with terms and homeguest
//make condition for container-narrow if props.wide is false
done;

//about, update the doc title and window scroll via useeffect
//save and test
//add Page in comp make useeffct for title dynamic
done;
//homeguest add handleSubmit to form, create it
//prevent the default, try alert and test
//install axios
//try, post send username, email password
//log'successful'
//cath log error
//save and test console and database
done;
//homegust,, setUsername, setEmail, setPassword
//create in line func for username .... and create its change event
// change the value of the post equal to the state
//save and test
done;
//header,cut the form and save in new comp named HeaderLoggedOut
//import in Header
//setUsername on onchange, same with password
//set onSubmit handleSubmit
//prevent default
//post to /login the 2nd arg save to response var
//console it
//save and test,

//delte console, if else
//if theres response, 'correct password', else, 'incorrect'
done;

//create new HeaderLoggedIn, github, index-feed
//after H4 untill button 1 div
//paste, replace class
//import save and test

// useState ma,e loggedIn
//if loggedin is true, logggedin, else logged out
//add props to loggedIn name setLogged
//save and tesst
// add props alse to logged in
//add onclick to log out set the setLoggedIn to false
done;
//headerlogout,  save to localStorage the response
//setItem 1, name we cant to store, complexappToken
//2, token
//set also for username, and avatar
//save and test
//application check local storage

//Header, set initialvalue to Bolean(locaSt..getItem(name of token))
//save and test

//headerlogin, empty onClick, create handleLogout
//after seeting login to false,
//removeiten token username and avatar to localStorage
//save and test

//for custom avatar
//Headerlogin, img src, change to dynamic
//local get item  avatar
//save and test
done;

//create Home.js, github, index-epty feed, copy paste
//starts h2 and p
//paste with Page , Your Feed title, change classname, and render
//save and test

//in Header cut, usestate paste to Main
//pass this to Header as props
//reciv and used this in Header
//save and test

//conditional the Home
//save and test

//make username dynamic
done;
//create CreatePost, github, create post, select form after header.
// paste with Page comp, title Create New post, classname
//set up route for for /create-post
//Link the Create post button
//save and test
//focus the input, change ..for, autocomplete...
//create handleSubmit to form
//prevent its default

//in Main, after imports , Axios.defaults.baseUrl = 'theurl'
//update all urls , homeguest, headerloggedout
// try catch
// in try, post to db the title, body, and token with hardcoded values
//token is from localstorage
//console 'new post created'
//save and test. check console and mongo db

//in create post, usestate the title, and body
//add change handler to title and body
//change the hardcoded value in aczios
//save and check. check console and mongodb
done;

//create viewsinglepost, github, sinle-post, above h2 dv below header, below 1 div
// paste with Page, title, single post
//classes change
//create route for /post/:id, save and test

//redirect after posting post in try, give a commecnt
//import withRouter in rrd
//change export default, add props

//in try, props history push to /post/id --fake
//saveand test

//make the id dynamic thru response
done;
//Main, above header
//FlashMessages, import to main and test
done

//new file in app name ExampleContext, import createContext
//const Ex.. and export . import in Main
//provide all components, add func addFlas as value
//down Create post, delete props,
//in Create, const of addFlashMessage with usecontect
//change the flash message below
//save and post test

//make thecreate context an object and add setLogged in and delete in Header below
//first destructure the addFlash from CreatePOst, save nd test

//back to header file, deelete setLogin below and
//go to header log in and out and use the use contexx
//alsose change setlogin in the hadlelogout func
//save and test
done
//import usereducer, in main func, declare useRReducer
done


start here
//Main,  add prop for initial state name user - obj
//props, token, username, avatar --get the values
//in headerloggedout, comment out 3 localSto
//add prop to app dispatch, wc is the response data, name data

//oruReducer, in login case, add draft.user prop
//with value of action.data

//before the return statement add useeffect
// if else. if state.loggedin is true, save to local storage -copy from header
//change the 2nd ar to state
//else, paste also, but remove, deleted 2nd arg

//inHeaderllgin, below dipatch, delete local storages
//import statedispatch and create const appState
//in img, change src
//save and test

//in Home, import statecontext and const appSatte
//change local storage from "Hello"... to appstate
//save and test

//CreatePost, import State and Dispatch context and andd their cons
//change the object that sent along.. the token
//save and test, check mongodb
done

//new file in comp name Profile, guthub, profile-posts
//start at h2 before footer 1 div
//paste with page title Profile Screen
//classnames
//add route for profile /profile/:username
// set dynamic link to avatar save and test 

//Profile, import useParams rrd
// destructure username 
//useeffect, create fetchData func try catch
//try, save to reponse post req to dynamic url\
//2nd arg is the token
//log the response
//just log in console for catch
done

//Profile, move the list group to new comp
//profilePosts , render to Profile
//save and test

// use state isLoading initial true
//if else below,
//if loading return a div ...


//usestate the post , initnital; em[pty array
//useeffect, 2nr arg empty
//add fetchPosts
//try, save to response get method
//make params dynamic with useParams
//log the response,  save and t est


//set isloading to false
//update the set posts

//loop thru data, make it dynamic
//for date create date var new date post/createDate
//var for dateFormatted
//save and test
//change a href to Link, link to /post/dynamic id
done

//in viewSinglepost, set state isLoading true
//post jut empty
// if isloading is true title and div is ...
//save and test

//useeffecct, same with profileposts
//change the url in axios useparamans of id
//rename async func to singular

//make the content dynamic
//save and test

//in Page  props of post.title  add dependecy props.title
//save and test

//make name in post dynamic and will go to /profile/username dynamic
done

//addd comp LoadingDotsIcon
//return div class  dots-loading
//add another inner div
//in viesingpost , render icon in if
//save and test,
//do with profile post
done

// ** **  ,  * *  ### ,  - Red 
//install react-markdown
//in viewsinglepost, ReactMarkdown import
//in body, reactmarkdown comp prop of source ={} post.body
//save and test

//add prop allowedTypes={[]}
done

//viewsinglepost, import ReactTooltip
//delete icon i element, a tag. add attr
//name data-tip - Edit 
//data-for 'ediit'
//below a tag, render tooltip id of edit, class of custom-tooltip
//delete title save and delete
//do with delete , save and test

//add space betwwen icons
done

//new file EditPost,  test
3
//copy view single post
//for jsx, copy from create post
//adjust, title,  handlesub,it, onchange,
//fill in the input and the body
2
//set up route below single post, /post:id/edit , give them exact
//Link the edit icon

4
//change button Save Update

//useImmerReducer ,ourReducer, originalState
//in originalstate obj
//titleobj, with value, hasErrors: false, message
//body obj, same with title
//loading initial of true
//saveIsLoading false
//sendCount 0

//delete useState props
//in useEffect, deletesetpost and setisloading
//insteat, render dispatch type of fetchComplete, 
//value of response.data

//in ourRducer, draft, action, switch is on action type
//case of fetchComplete, draft.title.value to action.value.title
//same with body and loading
//return

//change loading to isFetching and isSaving

//change id from axios
//change isLoading to isFetching
//delete date
//change title, body
//save and test
done


//edit post
// add onChange to , titleChange value of the encoded . as dispatch
//add this as a case, change the value prop of title
//do this for body, bodyChange
//return return

//func submitHandler to form
//prevent default
//submitRequest casse
//in here, increment the sendCount
//return
done

//duplicate useeffect, paste below
//sendCount as dependency
//cut all inside useeffect and add this if statecount is true

//post to /post/:id/edit, 2nd arg is an obj
//title, body token props. fill this in
//delete dispatch below and alert
//save nad test

//below if, add dispatch name saveRequestStarted isSaving true
//delete alert and dispatch saveRequestFinished is saving false

//add disabled to button conditionally
//save and test slow connection test

//import adppDispatcg and and type and value to display "Post was updated
//save and test include /post/id test
done

//Editpost, below input div class alert alert-danger small liveValidateMessage
//set example message
//save and test
// cut div, if haserrors && paste div
//save and test

//input onBLur dispatch name 'titleRules' value of -current value
//add case, if value is !true .trim(),  hasErrors is true
//message as 'you must provide a title'
//pull the message prop from state
//return save and test

//in submitRequest case, cut increment and if statement
//if title and body hasserrors is false
//paste the increment
//save and test

//insubmitHandler, after prevent
//dispatch the title rules and has value of title value
//save and test

//in body, set the onblur type of bodyRules and set the case
//in submit handler also dispatch for the body
//add the error div for the body and adjust
//save and test

//in title and body change set has errrors to false
//save and test
done

//Edit post, before form, &laquo; add link  Back to post permalink
//class of small font-weigght-bold
// link to /post/id dynamic
//form class mt-3
//save and test
done

//add prop to state notFound as false
//in first axios,  cut dispatch and add if else
//if ders response, pastte dispatch
//else create a type name notFound
//add case set true to notFound
//before isfetching,
//if notfound is true, 
// return addd a page comp, title Not Found a div class of text-center
//h2 Whooops we cannot find that page
//p class lead text-muted of You can always visit the homepage to get a fresh start
//make homepage a link that redirects to homepage
//save and test
done

//add comp name NotFound and transfer files here
//apply this is view single post above isloading
//render if loading is false and post s false
//save  and test

//add also this in route 
//save and test

editing url not yours
//in Edit posts that loads
//try below if dispatch
//if current username is not the author username
//flashMessage value of You do not have permission
//Redirect with the use of withRouter props history push, change func name to EditPost
//save and test
done

only display edit and delete icons to user
//viewsinglepost, span that holds edit and delete
//cut, make isOwner func. above return
//if isowner is true paste the span

//in isowner if, is loggedin is true
//return current user  == post author username
//outside id, return false
//save and test

show confirmation id delete is click
// in delete icon add deleteHandler on on click
//create deletehandler, add var areYouSure
//that = window.confirm Do you really want to delete this post
//below, if areyoesure is true alert
//save and test

//in try send axios delete, save to response var
//1, /post/id, 2, send token
//below if, appDispatch type flashMessaes,
//value Post was successfully deleted

//use the withRouter props to redirect to /profile/username dynamic
//save and test
done

adding new comp for search overlay
//name Search, return hello
//above footer add search, save and test
//github, html search is visible
//starts at div search-overlay, before footer
//change for, class autofocus autocomplete
//save and test

//add prop to initial state as isSearchOpen to false
//add case openSearch, issearopen to true
//do opposite to closeSearch

//make search comp conditional i isSearopen is true
//save and test

response to clicking the search
// in Headerloggedin,  a tag in search
//add handleSearchIcon via onCLick, and create this

//in this func prevent default
//call the opensearch type

//do this in close in the seatch comp
//save and test

close the icon via scape
//In Search, add useeffect
//listen to keyup event and run searchKeyPressHandler func
//cleanup by removing
//in the func, if e.keyCode = 27
//close the search by appDispatch
done

//main, import as  CSSTransition destructure
//in Search comp, cut, css comp, inside
//give css prop name timeout 330 in state.isOpen
//classnames 'search-overlay', unmountOnExit
//save and test

add tool tip
//headerlogin, search icon below a elemet
//render ReactToolTip comp
// add props place'bottom id 'search classname 'custom-tooltip
//in a tag data-for search data-tip 'Search
//save and test

//do with chat icon and profile

horizontal spacing
//search and chat
//profile and chat
//profile and create post 
//create and sign out
done

//destructure useImmer
//render use immer as state and setstate
//with props searchTerm, results, show, requestCount
//values of '', [], 'neither', 0
//add onchange to input handleInput
//in here, store as value the typed value
//setstate param of draft function
//searchtem is equals value

//add userffect, searchterm as dependency and console log the searchterm
//save and tes

//in use effect, add var name delay = settimeput
//evey 3000, log the searchterm
//in cleanup, cancel the delay timeput
//save and test

//delete log and call setstate draft as arg
//increment the requestCount

//another ueeffect, equestcount as dependency
//if reqstcount is true,

//in database, posts, Indexes, create index
//add title:  text
//add body: text
//review and confirm
done

//in use effect, create var ourRequest = Axios.CancelToken.source()
//in cllean up call ourrequest.cancel()
//below ourRequest add fetchResults func
//in try, create var name response ax post with 3 args
// /search url, 2 is searchTerm, 3 prop cancelToken: ourreq.token
loga response
//in catch error msg of There was a problem or the reqest was cancelled
//save and test
done


//store resposnse to state results

//in search overlay above --visible, add div
//class of dynamic 'circle-loader' + 
//if state show is  'loading, add 'circle-loader--visible'
//else emppty ''
//below div class, 'live-search-results ' +
//if state show is 'results' add 'live-search-results--visible
//else ''
//save and test

//cut all use effect content with delay
//if there is searchterm .trim, pase conten
//else set shoe to 'neither'
//above const delay set show to 'loading
//in usestate savinf t state, after saving to state,
//set show to 'results
//save and test
done

make count dynamic 
//below, make number dynamic
//make items conditional
//save and test

looping post results
//DELETe all a tags
//loop results, copy from Profile, starts from data to Link
//include by author, dynamic
//save and test

remove search results after clicking author
//in search Link, add onClick and call dispatch closeSearch
//save and test

add ID to view single post
//SAVE and test


no results
//SEARCH, below live search results, cut div until {} 1 div
//Boolean(state.res.len) && paste
// below, opposit and render p tag class of
//alert alert-danger text-center shadow-sm
//Sorry we could not find any results for that search.
//save and test
//reduce the delay to 750
done

change usestate to use immer
//profile, import useImmer, copy obj fro usestate
//use immer, state setstate
//add profileData and paste
//add followActionLoading false
//startFollowingRequestCount 0
//stopFollowingRequestCount 0
//change setProfileData below to setstate, draft param
//safe to profileData
//change all profiledata below with state
//save and test

only display follow buttons
//cut follow button below
//only show button if is logged in,
// u are not following 
//and the user is not the author
 //and profile username is not equal ....
//save and test
done


clicking the follow
//add onclick name startFollowing
//disabled to followactionloading
//in startfollowing, increment startfollowingreqcount ++
//copy first useeffect
//startfollcount as dependency
//cut alll content, if startcount  is true, paste
//adjust url to /addFollow/profileUSername dynamic
//in setstate below, set profildata is fllo to true
//and increment count followercount
//below if in useeeffct set actionloading to true
// set this to false below actionLoading
//save and test
done



show unfollow button
//copy, button below inc the condition,
//paste and changes, stop following, ! ,
// and danger, and i tag times
//craeate stopFollowing on Click
//copy func startfollowing above, change draft to stop
//copt all useffect and paste
//dependency is change to stop
//change url to /removeFollow 
//isFllowng false
// -- to counts followeCOunt
//action loading to false
//change if to stopFolloww...
//save and test

profile glitches
//PROFILE, 1st useeffect, add dependecy ro username
//profilepost, add depen to username
done

//profile,  import NavLink, change a tag to Navlink
//delete active class, change hrfe to to
//for post /profile/username exact
//copt  paste to other 2
//for /profile/username/followers
//for profile/username/following
//delete profileposts comp
//add switch and add routes to 3
//exact on 1st
//save and test

followers comp
//ProfileFollowers, copy profilepost and paste
//change func name and export name
//change url to followers
//delete date

// map params follower, index
//change Link url ro /profile/folloers username
//change img src to /followers avatar
//deleteng strong and span
//and input followers username
//import and render in Profile
//save and test

following comp
//ProfileFollowing, do samme with followers
// import render,
//save and test

//assignment 1 comp as profileFollow
// if no following , add, this user is not following anyone yet
//in your profile, message if you have no followers
done

//in home, useImmer
//set up state, obj of isLoading true, feed []
//profile, copy useeffect /profile/username
//copy paste, empty dependency
//change url to getHomeFeed
//set isloading to false
//feed to response

//in jsx, above return, if isloading is true
//import LoadingDotsIcon
//return this

//cut h2, if feed has length = 0 && paste
//wrap it in a fragment

//above if feed > 0, reactFragment, 
//h2 the latest from those you follow class text-center mb-4
//div class of list-group
//in search copy map and paste

//change state to feed
//delete onclick in Link
//save and test

reusable post componenet
//new comp name Post
//in home, from date to close, copy, and paste

//in home, render the post with post props key of post _id
//reciv props
//save and test

//in search, dlete from date to last and resnder post
//props of post and _id onClick appdispatch closeSearcg
//save and test

//in profilepost/ delete and paste
//props of post and _id

//in ProfilePost, add prop to Post noAuthor as true
//in Post, cut by username
//id propa.noautor is false &&  paste
//save and test

//in Post, delet key in link








