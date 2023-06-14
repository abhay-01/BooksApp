import {View, Text, ImageBackground, TouchableOpacity,Image, ScrollView,Animated} from 'react-native';
import React from 'react';
import {icons,FONTS,COLORS,SIZES} from '../constants';


const LineDivider = () => {
    return (
        <View style = {{
            width: 2,
            paddingVertical: 2,
        }}>

            <View style = {{
                flex:1,
                borderLeftColor: '#5c5c5c',
                borderLeftWidth: 1,
            }}>
            </View>
        </View>
    )
}

const BookDetails = ({route,navigation}) => {

    const [book, setBook] = React.useState(null);

    const[scrollViewWholeHeight, setScrollViewWholeHeight] = React.useState(1);
    const[scrollViewVisibleHeight, setScrollViewVisibleHeight] = React.useState(0);

    const indicator = new Animated.Value(0);



    React.useEffect(() => {
        let {book} = route.params;
        setBook(book)
    }, [book])

    function renderBookInfoSection(){
        return(
            <View style = {{
                flex:1,
            }}>

                <ImageBackground
                source={book.bookCover}
                resizeMode='cover'
                style = {{
                    position:'absolute',
                    top:0,
                    bottom:0,
                    left:0,
                    right:0
                }}
                
                />

                {/* Color Overlay */}

                <View style = {{
                    position:'absolute',
                    top:0,
                    bottom:0,
                    left:0,
                    right:0,
                    backgroundColor: book.backgroundColor
                }}>

                </View>

                {/* Navigation Header */}

                <View style = {{
                    flexDirection: 'row',
                    paddingHorizontal: SIZES.radius,
                    height: 80,
                    alignItems: 'flex-end'

                }}>
                    <TouchableOpacity style = {{
                        marginLeft: SIZES.base,

                    }}
                    onPress={() => navigation.goBack()}>

                        <Image 
                        source = {icons.back_icon}
                        resizeMode='contain'
                        style = {{
                            width:25,
                            height:25,
                        }}>

                        </Image>

                    </TouchableOpacity>

                    <View style = {{
                        flex:1,alignItems:'center', justifyContent: 'center'
                    }}>

                        <Text style = {{
                            ...FONTS.h2, color: 'gray'
                        }}>

                            Book Detail

                        </Text>

                    </View>

                    <TouchableOpacity style = {{
                        marginRight: SIZES.base
                    }}

                    onPress = {() => console.log("Click More")}>

                    <Image 
            
                        source = {icons.more_icon}
                        resizeMode='contain'
                        style = {{
                            width:25,
                            height:25,
                            alignSelf: 'flex-end'
                        
                    }}>

                    </Image>

                    </TouchableOpacity>

                </View>

                {/* Book Cover */}

                <View style = {{
                    flex: 5,
                    paddingTop: SIZES.padding2,
                    alignItems: 'center',
                }}>
                    <Image
                    source = {book.bookCover}
                    resizeMode='contain'
                    style = {{
                        flex:1,
                        width: 150,
                        height: 'auto'
                    }}></Image>
                </View>


                {/* Book Name and Author */}

                <View style = {{
                    flex: 2,
                    alignItems: 'center',
                    justifyContent: 'center',

                }}> 
                <Text style = {{
                    ...FONTS.h2,
                    color: COLORS.white
                }}>
                    {book.bookName}
                    </Text>

                  <Text style = {{
                    ...FONTS.h3, color: COLORS.white
                  }}> {book.author}

                  </Text> 
                </View>

                {/* Book Info */}

                <View style = {{
                    flexDirection: 'row',
                    paddingVertical : 20,
                    margin: SIZES.padding,
                    borderRadius: SIZES.radius,
                    backgroundColor: 'rgba(0,0,0,0.3)'
                }}>

                    {/* Rating */}

                    <View style = {{
                        flex:1,
                        alignItems: 'center'
                    }}>

                        <Text style = {{
                            ...FONTS.h3, color: COLORS.white    
                        }}>{book.rating}</Text>

                        <Text  style = {{
                            ...FONTS.body4, color: COLORS.white
                        }
                        }> Rating</Text>

                    </View>

                   <LineDivider/>
                    
                    {/* Pages */}

                    <View style = {{
                        flex:1,
                     //  paddingHorizontal: SIZES.radius,
                        alignItems: 'center'
                    }}>

                        <Text style = {{
                            ...FONTS.h3, color: COLORS.white    
                        }}>{book.pageNo}</Text>

                        <Text  style = {{
                            ...FONTS.body4, color: COLORS.white
                        }
                        }> Pages</Text>

                    </View>

                    <LineDivider/>


                    {/* Languages */}

                    <View style = {{
                        flex:1,
                        alignItems: 'center'
                    }}>

                        <Text style = {{
                            ...FONTS.h3, color: COLORS.white    
                        }}>{book.language}</Text>

                        <Text  style = {{
                            ...FONTS.body4, color: COLORS.white
                        }
                        }> Language</Text>

                    </View>


                </View>
            </View>
        )
    }

    function renderBookDescription(){

        const indicatorSize = scrollViewWholeHeight > scrollViewVisibleHeight ? scrollViewVisibleHeight * scrollViewVisibleHeight / scrollViewWholeHeight : scrollViewVisibleHeight;

        const difference = scrollViewVisibleHeight > indicatorSize ? scrollViewVisibleHeight - indicatorSize : 1;
        return(

            <View style = {{
                flex: 1,
                padding: SIZES.padding,
                flexDirection: 'row',
            }}>
                <View style = {{
                    width: 3,
                    height: '100%',
                    backgroundColor: 'gray'
                }}>

                    <Animated.View style = {{
                        width: 3,
                        height: indicatorSize,
                        backgroundColor: '5C5C5C',
                        transform: [{
                            translateY: Animated.multiply(indicator,
                                scrollViewVisibleHeight/scrollViewWholeHeight).interpolate({
                                    inputRange: [0,difference],
                                    outputRange: [0,difference],
                                    extrapolate: 'clamp'
                                })
                        }]
                    }}
                    >

                    </Animated.View>

            </View>


            <ScrollView
            contentContainerStyle = {{
                paddingLeft: SIZES.padding2
            }}
            showsVerticalScrollIndicator = {false}
            scrollEventThrottle = {16}
            onContentSizeChange = {(width,height) => {
                setScrollViewWholeHeight(height)
            }}
            onLayout={({nativeEvent: {layout: {x, y, width, height}}}) => {
                setScrollViewVisibleHeight(height)
            }}
             onScroll = {Animated.event(
                [{nativeEvent: {contentOffset: {y: indicator}}}],
                {useNativeDriver: false}
             )}
            >
                <Text style = {{
                    ...FONTS.h2, color: COLORS.white, marginBottom: SIZES.padding
                }}>Description</Text>

                <Text style = {{
                    ...FONTS.body2, color:'gray'
                }}>
                    {book.description}
                </Text>

            </ScrollView>

            </View>


        )
    }

    function renderBottomButton(){

        return (
            <View style = {{
                flex:1,
                flexDirection: 'row',
               

            }}>
                {/* Bookmark */}
                <TouchableOpacity style = {{
                    width: 60,
                    backgroundColor: COLORS.secondary,
                    marginLeft: SIZES.padding,
                    marginVertical: SIZES.base,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    justifyContent: 'center'

                }} onPress={() => console.log("Bookmark")}>

                    <Image 
                    source={icons.save_icon}
                    resizeMode='contain'
                    style = {{
                        height: 25,
                        width: 25
                    }}/>

                </TouchableOpacity>

                <TouchableOpacity style = {{
                    flex:1,
                    backgroundColor: 'orange',
                    borderRadius: SIZES.radius,
                    marginHorizontal: SIZES.padding,
                    marginVertical: SIZES.base,
                    alignItems: 'center',
                    justifyContent: 'center'

                }}
                onPress = {() => console.log("Start Reading")}>

                <Text style = {{
                    ...FONTS.h3, color: COLORS.white
                }}>Start Reading</Text>

                </TouchableOpacity>

            </View>
        )
    }

    if(book){ // if book is not null
    return (
        <View style= {{
            flex:1,
            backgroundColor: COLORS.black
        }}>

            {/* Book Cover Section */}

            <View style = {{
                flex:4
            }}>
                {renderBookInfoSection()}   

            </View>

            {/* Description */}

            <View style = {{
                flex:2,
            }}>
                {renderBookDescription()}

            </View>


            {/* Button */}

            <View style = {{
                height: 70,
                marginBottom: 15,
            }}>
                {renderBottomButton()}
            </View>





            

        </View>
    )
}

}


export default BookDetails;