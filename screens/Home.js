import {View, Text, SafeAreaView,TouchableOpacity,Image, ScrollView,FlatList} from 'react-native';
import React from 'react';

import { COLORS, SIZES, FONTS, icons, images} from '../constants';


const Home = ({navigation}) => {

    const profileData = {
        name: 'Username',
        point: 100
    }


    const bookOtherWord = {
        id:1,
        bookName: "Other Words for Home",
        bookCover: images.OtherWords,
        rating: 4.5,
        language: "English, Arabic",
        pageNo: 350,
        author: "Jasmine Warga",
        genre: [
            "Romance", "Drama", "Fiction"
        ],
        readed: "250k",
        description: "Jude never thought she’d be leaving her beloved older brother and father behind, all the way across the ocean in Syria. But when things in her hometown start becoming volatile, Jude and her mother are sent to live in Cincinnati with relatives.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"

    }

    const bookBlackPanther = {
        id:2,
        bookName: "Black Panther",
        bookCover: images.Black,
        rating: 4.5,
        language: "English",
        pageNo: 290,
        author: "Jack Kirby",
        genre: [
            "Action", "Adventure", "Fiction"
        ],
        readed: "120k",
        description: "Black Panther is a fictional superhero appearing in American comic books published by Marvel Comics. The character was created by writer-editor Stan Lee and writer-artist Jack Kirby, first appearing in Fantastic Four #52 in the Silver Age of Comic Books.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"

    }

    const bookNova = {
        id:3,
        bookName: "Nova",
        bookCover: images.Nova,
        rating: 4.5,
        language: "English",
        pageNo: 324,
        author: "Sean Ryan",
        genre: [
            "Action", "Adventure", "Fiction"
        ],
        readed: "113k",
        description: "Nova is a fictional superhero appearing in American comic books published by Marvel Comics. The character appeared historically as the star of his own series, and at other times, as a supporting character in team books such as The New Warriors.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"


    }

    const bookSpiderMan = {
        id:4,
        bookName: "SpiderMan",
        bookCover: images.Spidy,
        rating: 4.8,
        language: "English",
        pageNo: 350,
        author: "Stan Lee",
        genre: [
            "Action", "Adventure", "Fiction"
        ],
        readed: "250k",
        description: "Spider Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 in the Silver Age of Comic Books.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"

    }

    const bookVenom = {
        id:5,
        bookName: "Venom",
        bookCover: images.Venom,
        rating: 4.2,
        language: "English",
        pageNo: 362,
        author: "Rick Remender",
        genre: [
            "Action", "Adventure", "Fiction"
        ],
        readed: "250k",
        description: "Venom is a 2018 American superhero film featuring the Marvel Comics character of the same name, produced by Columbia Pictures in association with Marvel Entertainment[5] and Tencent Pictures, and distributed by Sony Pictures Releasing.",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"


    }

    const bookWolverine = {
        id:6,
        bookName: "Wolverine",
        bookCover: images.Wolverine,
        rating: 4.5,
        language: "English",
        pageNo: 350,
        author: "Chris Claremont",
        genre: [
            "Action", "Adventure", "Fiction"
        ],
        readed: "250k",
        description: "The Wolverine[b] is a 2013 superhero film featuring the Marvel Comics character Wolverine. It is the sixth installment in the X-Men film series, the second installment in the trilogy of Wolverine films after X-Men Origins: Wolverine (2009), and a spin-off/sequel to X-Men: The Last Stand (2006).",
        backgroundColor: "rgba(240,240,232,0.9)",
        navTintColor: "#000"
    }

    const myBooksData = [
        {
            ...bookOtherWord,
            completion: "67%",
            lastRead: "3d 5h"
        },
        {
            ...bookBlackPanther,
            completion: "23%",
            lastRead: "10d 5h"
        },
        {
            ...bookNova,
            completion: "10%",
            lastRead: "1d 1h"
        },
        {
            ...bookSpiderMan,
            completion: "67%",
            lastRead: "3d 5h"

        },
        {
            ...bookVenom,
            completion: "23%",
            lastRead: "10d 5h"
        },
        {
            ...bookWolverine,
            completion: "10%",
            lastRead: "1d 1h"
        }

    ]

    const categoryData = [

        {
            id:1,
            categoryName: "Best Seller",
            books: [
                bookOtherWord, bookBlackPanther, bookNova, bookSpiderMan, bookVenom, bookWolverine
            ]
        },
       
        {
            id:2,
            categoryName: "Trending",
            books: [
                bookSpiderMan, bookVenom, bookWolverine
            ]
        },
        {
            id:3,
            categoryName: "Coming Soon",
            books: [
                bookWolverine
            ]
        },
    ]


    const[profile, setProfile] = React.useState(profileData); 
    const[myBooks, setMyBooks] = React.useState(myBooksData);
    const[categories, setCategories] = React.useState(categoryData);
    const[selectedCategory,setSelectedCategory] = React.useState(1);
     
    const renderHeader = (profile) => {

   
        return(
            <View style = {{flexDirection: '1', flexDirection:'row', paddingHorizontal: SIZES.padding, alignItems: 'center'}}>
                {/* Greetings */}

                <View style = {{flex: 1}}>
                    <View style = {{marginRight: SIZES.padding}} >
                       <Text style = {{...FONTS.h3, color: COLORS.white}}>
                        Good Morning
                       </Text>
                       <Text style = {{...FONTS.h2, color: COLORS.white}}>
                        {profile.name}
                       </Text>

                    </View>

                </View>

                {/* Points */}

                <TouchableOpacity
                style = {{
                    backgroundColor: '#FF5733',
                    height: 40,
                    paddingLeft: 3,
                    paddingRight: SIZES.radius,
                    borderRadius: 20
                }}
                onPress = {() => {console.log("Point")}}
                 >

                    <View style = {{
                        flex:1,
                         flexDirection: 'row', 
                         justifyContent: 'center', 
                          alignItems: 'center'}}>

                        <View style = {{
                            width: 30,
                            height: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 25,
                            
                        }}>
                            <Image
                            
                               source={icons.plus_icon}
                               resizeMode='contain'
                               style = {{
                                width: 20,
                                height: 20
                               }}

                             /> 

                        </View>

                       <Text style = {{
                            marginLeft: SIZES.base,
                            color: COLORS.white,
                            ...FONTS.body3,
                            fontWeight: 'bold',
                            fontSize: 16
                          
                       }}>
                        {profile.point} points
                       </Text>

                    </View>
                 </TouchableOpacity> 

            </View>
        )
    }

    const renderButtonSection = () => {

        return (
            <View style = {{
                flex:1,
                justifyContent: 'center',
                padding: SIZES.padding,

            }}>
                <View style = {{
                    flexDirection: 'row',
                    backgroundColor: COLORS.secondary,
                    height: 70,
                    borderRadius: SIZES.radius,
                }}>
                    {/* Claim */}

                    <TouchableOpacity
                    onPress = {() => {console.log("Claim")}}>

                        <View style = {{
                            flex:1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'}}>

                            <Image 
                            source={icons.claim_icon}
                            resizeMode='contain'
                            style = {{
                                height: 35,
                                width: 35,
                                marginLeft: 10
                            }}/>

                            <Text style = {{
                                marginLeft: SIZES.base,
                                color: COLORS.white,
                                ...FONTS.body3,
                                marginRight: 5
                            }}>
                                Claim
                            </Text>

                            </View>


                    </TouchableOpacity>

                    {/* Divider */}

                    <View style = {{
                        width: 1,
                        paddingVertical:18
                    }}>
                        <View style = {{
                            flex:1,
                            borderLeftColor:COLORS.gray,
                            borderLeftWidth: 1
                        }}>

                        </View>

                    </View>

                    {/* Get Point */}

                    <TouchableOpacity
                    onPress = {() => {console.log("Get Point")}}>

                        <View style = {{
                            flex:1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'}}>

                            <Image 
                            source={icons.point_icon}
                            resizeMode='contain'
                            style = {{
                                height: 35,
                                width: 35,
                                marginLeft: 5,
                                
                            }}/>

                            <Text style = {{
                                marginLeft: SIZES.base,
                                color: COLORS.white,
                                ...FONTS.body3,
                                marginRight: 5
                            }}>
                                Get Point
                            </Text>


                            </View>


                    </TouchableOpacity>

                    {/* Divider */}

                    <View style = {{
                        width: 1,
                        paddingVertical:18
                    }}>
                        <View style = {{
                            flex:1,
                            borderLeftColor:COLORS.gray,
                            borderLeftWidth: 1
                        }}>

                        </View>

                    </View> 



                    {/* My Card */}


                    <TouchableOpacity
                    onPress = {() => {console.log("My Card")}}>

                        <View style = {{
                            flex:1,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'}}>

                            <Image 
                            source={icons.card_icon}
                            resizeMode='contain'
                            style = {{
                                height: 35,
                                width: 35,
                                marginLeft: 5
                            }}
                            />

                            <Text style = {{
                                marginLeft: SIZES.base,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}>
                                My Card
                            </Text>

                            </View>


                    </TouchableOpacity>


                </View>
            </View>
        )

    }

    function renderMyBooksSection(myBooks) {

        const renderItem = ({item, index}) => {

            return(

                <TouchableOpacity style = {{
                    flex: 1,
                    marginLeft: index == 0 ? SIZES.padding : 0,
                    marginRight: SIZES.radius
                }}
                onPress = {() => navigation.navigate("BookDetails", {
                    book:item                      //passing the book object to the book details screen
                })}
                >
                    {/* Book Cover */}

                    <Image sources = {item.bookCover}
                    resizeMode = "cover"
                    style = {{
                        width: 180,
                        height: 250,
                        borderRadius: 20,
                        backgroundColor: COLORS.white
                    }}/>

                    {/* Book Info */}

                    <View style = {{
                        marginTop: SIZES.radius,
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <Image source = {icons.clock_icon}
                        style = {{
                            width: 20,
                            height: 20,
                            
                        }}
                        />

                        <Text style = {{marginLeft:5, ...FONTS.body3,
                        color: COLORS.lightGray}}>{item.lastRead}
                        </Text>

                        <Image source = {icons.page_icon}
                        style = {{
                            marginLeft: 25,
                            width: 20,
                            height: 20,
                        }}
                        />

                        <Text style = {{marginLeft:5, ...FONTS.body3,
                        color: COLORS.lightGray}}>{item.completion}
                        </Text>
                    </View>
                </TouchableOpacity>
            )
        }

        
        return(

            <View style = {{flex: 1}}>

                {/* Header */}
                <View style = {{
                    paddingHorizontal: SIZES.padding, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
                }}>
                    <Text style = {{
                        ...FONTS.h2, color: COLORS.white 
                    }}>My Books    
                    </Text>

                    <TouchableOpacity 
                    onPress={() => console.log("See More")}>
                        <Text style = {{...FONTS.body3, color: 'gray',textDecorationLine: 'underline', alignSelf: 'flex-start'}}>See More</Text>
                    </TouchableOpacity>
                </View>
                 

                 {/* Books */}


                 <View style = {{ flex:1, marginTop: SIZES.padding}}>
                        <FlatList
                         data = {myBooks}
                         renderItem={renderItem}
                         keyExtractor={item => `${item.id}`}
                         horizontal
                         showsHorizontalScrollIndicator={false}
                        />

                 </View>
            </View>
        )
    }

    function renderCategoryHeader(){

        const renderItem = ({item}) => {
            return(
                <TouchableOpacity style = {{
                    flex: 1,marginRight:15,
                    marginLeft:10
                }}
                    onPress = {() => setSelectedCategory(item.id)}
                >
                    {
                        selectedCategory == item.id && //
                        <Text style = {{
                            ...FONTS.h2, color: COLORS.white
                        }}>{item.categoryName}</Text>
                    }

                    {
                        selectedCategory != item.id && 
                        <Text style = {{
                            ...FONTS.h2, color: 'gray'
                        }}>{item.categoryName}</Text>
                    }

                </TouchableOpacity>
            )
        }

        return (

            <View>
                <FlatList
                data = {categories}
                renderItem = {renderItem}
                keyExtractor = {item => `${item.id}`}
                showsHorizontalScrollIndicator = {false}
                horizontal/>
            </View>
        )
    }

    function renderCategoryData(){
        var books = []

        let selectedCategoryBooks = categories.filter(a => a.id == selectedCategory)

        if(selectedCategoryBooks.length>0){ // if there are books in the category
            books = selectedCategoryBooks[0].books // get the books
        }

        const renderItem = ({item}) => {
            return(
                <View style = {{
                    marginVertical: SIZES.base
                }}>
                    <TouchableOpacity
                    style = {{
                        flex: 1,
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.navigate("BookDetails", {
                    book: item    
                      })}>

                        {/* Book Cover */}
                        <Image 
                        source = {item.bookCover}  
                        resizeMode = "cover"
                        style = {{
                            width: 100,
                            height: 150,
                            borderRadius: 10,
                            backgroundColor: COLORS.white
                        }}/>

                        <View style = {{
                            flex:1,
                            marginLeft: SIZES.radius
                        }}>
                            
                            {/* Book name and author */}

                            <View>
                            <Text style = {{
                                paddingRight: SIZES.padding,
                                ...FONTS.h2,
                                color: COLORS.white
                            }}>
                                {item.bookName}
                            </Text>
                            <Text style = {{
                             paddingRight: SIZES.padding,
                             ...FONTS.h3,
                             color: 'gray'

                            }}>{item.author}</Text>
                            </View>

                            {/* Book Info */}

                            <View style = {{
                                flexDirection: 'row',
                                marginTop: SIZES.radius
                            }}>
                                <Image
                                source = {icons.page_filled_icon}
                                resizeMode='contain'
                                style = {{
                                    width: 20,
                                    height: 20
                                }}
                                />

                                <Text style = {{
                                    paddingHorizontal: SIZES.radius,
                                    color: 'gray'
                                }}>{item.pageNo}p</Text>

                                <Image
                                source = {icons.read_icon}
                                resizeMode='contain'
                                style = {{
                                    width: 20,
                                    height: 20
                                }}
                                />

                                <Text style = {{
                                    paddingHorizontal: SIZES.radius,
                                    color: 'gray'
                                }}>{item.readed}</Text>
                            </View>

                            {/* Genre */}

                            <View style = {{
                                flexDirection: 'row',
                                marginTop: 22
                            }}>

                                {

                                    item.genre.includes("Adventure") &&
                                    <View style = {{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: SIZES.base,
                                        marginRight: SIZES.base,
                                        backgroundColor: COLORS.darkgreen,
                                        borderRadius: SIZES.radius
                                    }}>
                                        <Text style = {{
                                            ...FONTS.body3,
                                            color: '#90EE90'

                                        }}>
                                            Adventure
                                        </Text>
                                    </View>
                                }

                                {
                                    
                                    item.genre.includes("Romance") &&
                                    <View style = {{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: SIZES.base,
                                        marginRight: SIZES.base,
                                        backgroundColor: '#E3242B',
                                        borderRadius: SIZES.radius
                                    }}>
                                        <Text style = {{
                                            ...FONTS.body3,
                                            color: '#FFCCCB'

                                        }}>
                                            Romance
                                        </Text>
                                    </View>
                                }

{
                                    
                                    item.genre.includes("Drama") &&
                                    <View style = {{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: SIZES.base,
                                        marginRight: SIZES.base,
                                        backgroundColor: COLORS.blue,
                                        borderRadius: SIZES.radius
                                    }}>
                                        <Text style = {{
                                            ...FONTS.body3,
                                            color: '#ADD8E6'

                                        }}>
                                            Drama
                                        </Text>
                                    </View>
                                }

{
                                    
                                    item.genre.includes("Fiction") &&
                                    <View style = {{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: SIZES.base,
                                        marginRight: SIZES.base,
                                        backgroundColor: '#D6B8',
                                        borderRadius: SIZES.radius
                                    }}>
                                        <Text style = {{
                                            ...FONTS.body3,
                                            color: '#C4A484'

                                        }}>
                                            Fiction
                                        </Text>
                                    </View>
                                }


                                
{

item.genre.includes("Action") &&
<View style = {{
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.base,
    marginRight: SIZES.base,
    backgroundColor: '#cc4c00',
    borderRadius: SIZES.radius
}}>
    <Text style = {{
        ...FONTS.body3,
        color: '#fc5e'

    }}>
        Action
    </Text>
</View>
}


                            </View>
                        </View>

                    </TouchableOpacity>

                    {/* Bookmark Button */}

                    <TouchableOpacity 
                    style = {{
                        position: 'absolute',top: 5, right: 15
                    }}
                    
                    onPress = {()=> console.log("Bookmark")}>

                        <Image
                        source = {icons.save_icon}
                        resizeMode='contain'
                        style = {{
                            width: 25,
                            height: 25
                        }}
                        
                        >

                        </Image>

                    </TouchableOpacity>
                </View>
            )
        }

        return(
            <View style = {{
                flex:1,
                marginTop: SIZES.radius,
                paddingLeft: SIZES.padding
            }}>
                <FlatList
                data = {books}
                renderItem = {renderItem}
                keyExtractor={item => '${item.id};'}
                showsVerticalScrollIndicator = {false}
                />

            </View>
        )
    }
    return (
       <SafeAreaView style = {{flex:1,backgroundColor: COLORS.black,}}>

                {/* Header Section */}

                <View style = {{height:200}}>
                    {renderHeader(profile)}
                    {renderButtonSection()}

                </View>


                {/* Body Section */}

                <ScrollView style = {{
                    marginTop: SIZES.radius,
                    
                }}>

                    {/* Book Section */}
                    <View>
                         {renderMyBooksSection(myBooks)}
                    </View>

                    {/* Category Section */}

                    <View style = {{
                        marginTop: SIZES.padding
                    }}>
                        <View>
                            {renderCategoryHeader()}
                        </View>
                        <View>
                            {renderCategoryData()}
                        </View>
                    </View>
                </ScrollView>

         </SafeAreaView>
    )
}


export default Home;