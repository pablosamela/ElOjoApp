//http://bardevblog.wordpress.com/2012/01/16/understanding-backbone-js-simple-example/
//http://iloire.github.io/backbonejs-googlemaps-demo/

(function($) {

    /*
    window.Taxonomy = Backbone.Model.extend();
    window.Taxonomies = Backbone.Collection.extend({
        model: Taxonomy,        
        url: 'http://www.elojodigital.com/all-sections-json',
        parse : function(response){
            return response.terms;  
        }    
    });
    window.TaxonomiesView = Backbone.View.extend({
        tagName: 'ul',
        className:  'taxonomy dropdown-menu',
        initialize: function () {
            _.bindAll(this, 'render');
            this.listenTo(this.model, 'change', this.render);
        },
        render: function(){
            console.log(this.model);
            this.template = _.template($('#taxonomy-template').html());
            $(this.el).append(this.template(this.model.toJSON()));
            return this;
        }
    });
    window.termlist = new Taxonomies();   
    */  

    window.Node  = Backbone.Model.extend({

    });
    window.Nodes = Backbone.Collection.extend({
        model: Node,
        parse : function(response){
            return response.nodes;  
        }    
    });
    
    window.NodesView = Backbone.View.extend({
        tagName: 'div',
        className:  'node media',
        initialize: function () {
            _.bindAll(this, 'render');
            this.listenTo(this.model, 'change', this.render);
        },
        render: function(){
            this.template = _.template($('#node-list').html());
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

    window.nodelist = new Nodes();

    window.nodesView = new NodesView({
        model: window.nodelist
    });
    
    window.Router = Backbone.Router.extend({
        routes: {
            '': 'defaultRoute',
            'section/:id': 'showSection'
        },
        initialize: function(){
           this.fetchData(20);
        },
        defaultRoute: function () {
        },
        showSection: function(id){
           this.fetchData(id);
        },
        fetchData:function(sectionId){
            $('.load').removeClass('hide');
            NProgress.start();
            window.nodelist.fetch({
                url: 'http://www.elojodigital.com/json/' + sectionId,
                success: function(){
                    $('#navbar').html(window.nodesView.render().el);
                    $('.load').addClass('hide');
                    NProgress.done();
                },
                timeout: 10000,
                dataType: 'jsonp',
                jsonpCallback: 'jsonp',
                processData: true
            });
        }
    });
    

    var appRouter = new Router();
    Backbone.history.start(
    );
        


})(jQuery);
