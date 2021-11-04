# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Craft.destroy_all
Event.destroy_all
User.destroy_all

@moldir = User.create!(
  username: 'moldir',
  email: 'moldir@gmail.com',
  password: '123456'
)


@bob = User.create!(
  username: 'bob',
  email: 'bob@gmail.com',
  password: '123456'
)
puts "#{User.count} users created"

##################################

Craft.create!(
  title: '100 Awesome Art Projects for Creative At-Home Fun',
  name: 'Ally Noel',
  image: 'https://static.mommypoppins.com/styles/image960x650/s3/new_img_0808_1.jpg',
  description: "Did you know plastic milk jugs make awesome fairy houses, or sugar cubes are a fun substitute for Lego bricks? Sometimes we all need a little inspiration to get our creative juices flowing. And we're here to help, with a mega list of 100 arts and crafts projects you can do with your kids in the comfort of your own home.
    Our list of creative boredom busters, includes everything from paper crafts, like crafting a decorative paper mache bowl, to our best slime recipes, inventive STEM activities, and projects perfect for the artsy preschooler in your life.
    So, embrace your inner maker, and your newfound homebound existence, roll up your sleeves, and craft some memories and pretty cool finished projects in the process 
    1. Prepare
    2. Tie-dye without the mess? Yes, it can be done! Learn how to create beautiful swirls with Sharpies.
    3. Adorn T-shirts and tote bags (or anything else made of fabric) with this super simple no-wax batik method.
    4. If the weather outside isn't cooperating, craft some paddles and enjoy a game of balloon tennis; it's the perfect way to get out some of that energy!
    5. Create unique jewels to rival the queen's using nothing more than buttons and pipe cleaners.
    6. Boring paintbrushes are so last year! Watch the colors spread across the paper when you paint with a straw.
    7. Turn swirls and whirls of glue into mini masterpieces with an easy salt painting.
    8. Arm knitting is the perfect way to introduce kids to the yarn craft. Learn how to make an awesome infinity scarf without a cumbersome time commitment.
    9. Being on-trend has never been so easy: Make this adorable pompom necklace
    ",
  email: 'allyNoel@gmail.com',
  posted_date: '4/26/20',
  user: @moldir
)

Craft.create!(
  title: 'Preschool Thanksgiving Crafts ',
  name: 'Katie Mclaw',
  image: 'https://static.mommypoppins.com/styles/image960x650/s3/watercoloring.jpg',
  description: "1. Spice Dough
  For many people, the scent of nutmeg, cloves, and cinnamon invoke the warm and cozy feeling of the holidays. This Spice Playdough not only smells like homemade pumpkin pie, but it will also keep little hands occupied during the Thanksgiving feast!  
  2. Fruit Turkeys
  This turkey isn’t just plump and perky; he’s downright delicious, too! Make some Thanksgiving memories while making one of these fruit turkeys out of an apple. 
  
  3. Handprint Turkey Place Cards 
  These are easy to make but add such a lovely personalized touch to the table. We folded over a piece of cardstock to create our place card, then created a handprint turkey on each one.  It’s really fun to pull these out each year and see how much everyone has grown. 
  
  4. Handprint Wreath
  Handprint crafts always hold a special place in my heart, and this handprint wreath certainly pulls at my heartstrings. Simply trace the outline of a hand onto construction paper and cut it out. Repeat until you have enough hands to form a circular shape. You can personalize this Thanksgiving craft by writing something everyone is thankful for on the handprints
  
  5. Leaf Wreath 
  Cut a paper plate into a circle to create the base of your wreath. Next time you go on a walk, gather beautifully colored fall leaves. Simply glue the leaves onto the paper plate wreath to create a leaf wreath. 
  
  6. Feed The Turkey 
  This easy-to-make preschool game will keep your little one entertained until you are ready to pull the turkey out of the oven.  Feed the Turkey is a great way to work those fine motor skills and have a little fun. 
  
  7. Turkey Playdough Activity 
  In addition to your pie dough, you can whip up a batch of playdough and create this (time) filling invitation to play. 
  
  8. Thanksgiving Dinner Sensory Bin 
  This is another fun activity that will keep young kids busy while you run around the kitchen trying to make Thanksgiving magic happen. Fill your Thanksgiving Dinner Sensory Bin with corn kernels, play food, and other seasonal favorites like gourds and pumpkins. 
  
  9. Corn on the Cob Painting 
  Create colorful whirls and swirls of color by using an ear of corn to create unique patterns and prints. Corn on the Cob Painting is fun on its own, but you can take this craft to the next level by making your own napkins, placemats, or even a tablecloth. ",
  email: 'Katie@gmail.com',
  posted_date: '6/16/21',
  user: @moldir
)


Craft.create!(
title: 'Easy Christmas Paper Craft',
name: 'Sarah Smith',
image: 'https://i2.wp.com/www.thebestideasforkids.com/wp-content/uploads/2017/11/Christmas-Tree-Crafts-for-Kids-Ideas.jpg',
description: 'Christmas is right around the corner, and that means crafts galore! This Easy Christmas Paper Craft is a great way to bring in the holiday spirit.

There are many layers to this activity that make it an ideal craft for kids. From the adorable Santa outfit to hanging it to dry on the line, you’ll love every second of this!',
email: 'sarah@gmail.com',
posted_date: '11/26/21',
user: @bob

)
puts "#{Craft.count} crafts created"

################################

Event.create!(
  title: 'Little Leapers at Sky Zone Clermont',
  image: 'https://d3qlyn3oeazit.cloudfront.net/production/BlogPostSection/223/image_1/gallery_image_1618350991-ActivePlay.png',
  date: 'Aug 12',
  time: '9:00 a.m',
  age: '5 and under', 
  price: '$10 per jumper',
  location: 'Sky Zone Clermont',
  description: 'Little Leapers is offered each week, Tuesday & Thursday, and is for little ones to bounce and explore without interference from older kids',
  user: @bob
)

Event.create!(
  title: 'Pumpkin Ponderosa at Showcase of Citrus',
  image:'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-106519389-1595002835.png',
  date: 'Sep 18',
  time: '9:00 am - 7:00pm',
  age: 'All ages',
  price: 'Free admission & parking',
  location:'Showcase of Citrus',
  description: 'This annual event includes a pumpkin patch, outdoor games, pumpkin painting (weekends only), and hayrides. Guests can also enjoy the famous monster truck tour through the ranch, farm animals, playgrounds, catch and release fishing, and gem mining.',
  user: @moldir
)
Event.create!(
  title: "Books n' Cookies at Princesses and Princes",
  image: 'https://images.squarespace-cdn.com/content/v1/5839e25eb8a79b774fad8b39/1629396784394-B5VTIRU6UXWJOYSBQXLQ/DisPrincess2.jpg?format=1000w',
  date: 'May 18',
  time: '10:30am',
  age: '0 - 6',
  price: 'Included with admission of $13.99 per child (1 adult included); $9.99 for siblings',
  location:'Princesses and Princes Indoor Playground',
  description: 'This sweet weekly event includes storytime and a treat.
  Advanced admission is required and can be purchased on the Princesses and Princes website.',
  user: @moldir
)
Event.create!(
  title: "Pirate's ship party",
  image: 'https://cdn.greenvelope.com/blog/wp-content/uploads/image6-2.jpg',
  date: 'April 18',
  time: '11:30am',
  age: '0 - 6',
  price: 'Included with admission of $13.99 per child (1 adult included); $9.99 for siblings',
  location:'Pirate In Ship',
  description: 'This sweet weekly event includes storytime and a treat.
  Advanced admission is required and can be purchased on the Princesses and Princes website.',
  user: @bob
)
Event.create!(
  title: "BOGO Wednesdays at Monkey Joe's, Winter Park",
  image: 'https://d2fxn1d7fsdeeo.cloudfront.net/kentuckyliving.com/wp-content/uploads/2020/11/13135841/MJ-head-and-logo.jpg',
  date: 'Mar 3',
  time: '10:30 - 3:00pm',
  age: 'All ages',
  price: 'Get two entries for the price of one ($12.99 per child, $7.99 for ages 2 and under, adults free)',
  location:"Monkey Joe's - Winter Park",
  description: "Get the kids out of the house to expel some energy with two entries for the price of one every Wednesday at Monkey Joe's Winter Park.",
  user: @bob
)


puts "#{Event.count} events created"