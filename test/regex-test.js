require('chai/register-should');

describe('regular expression', function() {

    describe('test', function() {
        it('should be true if the regex matches', function() {
            /Hello/.test("Hello world").should.be.true;
        });

        it('should be false if the regex does not match', function() {
            /Hello/.test("Greetings world").should.be.false;
        });

        it('should match in the middle of the string', function() {
            /lo/.test("Hello world").should.be.true;
        });
    });

    describe('search/match', function() {
        it('should find the number', function() {
            "The number 1 is easy to find".match(/\d/).should.include('1');
        });

        it('should only find the first digit', function() {
            "The number 12 is not as easy to find".match(/\d/).should.not.include('12');
            "The number 12 is not as easy to find".match(/\d/).should.include('1');
        });

        describe('groups', function() {
            it('should capture groups', function() {
                var results = "The number 12 can be found".match(/(\w+) (\d+)/);
                results.should.include.members(['number 12', 'number', '12']);
            });
        });
    });

    describe.skip('finding numbers in strings', function() {
        var re = /\d/g;

        var inputs = [
            ['There is 1 item', ['1']],
            ['There are 15 items', ['15']],
            ['I like the number 15,674 for some reason', ['15,674']],
            ['The book costs $5.99 and not a penny more', ['5.99']],
            ['You will find 1 book with 17 pages', ['1', '17']]
        ];

        function doTheMatching(regex, string) {
            return re.exec(string);
        }

        inputs.forEach(function(test) {
            it('should extract ' + JSON.stringify(test[1]) + ' from ' + test[0], function() {
                doTheMatching(re, test[0]).should.include.members(test[1]);
            });
        });

    });
});
