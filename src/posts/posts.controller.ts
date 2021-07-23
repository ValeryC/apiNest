import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import PostsService from './posts.service';
import CreatePostDto from './dto/createPost.dto';
import UpdatePostDto from './dto/updatePost.dto';
 

// To mark a class to be a controller, we use the  @Controller() decorator. 
// We pass an optional argument to it. It acts as a path prefix to all of the routes within 
// the controller.
@Controller('posts')
export default class PostsController {
  constructor(
    private readonly postsService: PostsService
  ) {}
 
// The next set of decorators connected to routing in the above controller are  
// @Get(),  @Post(),  Delete(),  and  @Put(). T
// hey tell Nest to create a handler for a specific endpoint for HTTP requests.
//  The above controller creates a following set of endpoints:

@Get()
getAllPosts() {
  return this.postsService.getAllPosts();
}
// Returns all posts
 
  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postsService.getPostById(Number(id));
  }
//  Returns a post with a given id

  @Post()
  async createPost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }
  // Creates a new post
 
  @Put(':id')
  async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.replacePost(Number(id), post);
  }
  // Replaces a post with a given id
 
  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    this.postsService.deletePost(Number(id));
  }
  // Removes a post with a given id
}