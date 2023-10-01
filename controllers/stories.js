const Story = require('../model/stories');

module.exports.setStories = async (req, res, next) => {
  console.log(req.body);
    try {
        // Extract the story data from the request body
        const { story, prompt, likes, dislikes } = req.body;

        const newStory = new Story({
            story: story,
            prompt: prompt,
            likes: likes,
            dislikes: dislikes,
        });
        console.log(newStory);
        await newStory.save();

        res.status(200).json({ message: 'Story saved successfully' });
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({ message: 'Error saving the story' });
    }
};

module.exports.getStories = async (req, res, next) => {
  try {
    // Use Mongoose to query the database for stories
    const stories = await Story.find({});

    res.status(200).json(stories);
} catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching stories' });
}
};