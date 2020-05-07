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